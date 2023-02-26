import { useState, useCallback, useEffect } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import CandidateEditForm from "./molecules/CandidateEditForm";
import useMounted from "../../hooks/useMounted";
import useSettings from "../../hooks/useSettings";
import ChevronRightIcon from "../../icons/ChevronRight";
import { candidateApi } from '../../services/_mockApi_/candidateDetails';

const CandidateEdit = () => {
  const mounted = useMounted();
  const { settings } = useSettings();
  const [candidate, setCandidate] = useState(null);
  const [header, setHeader] = useState("");
  const { id } = useParams();

  const getCandidate = useCallback(async () => {
    try {
      if (id === undefined) {
        await setCandidate({ id: 0 });
        setHeader("Add New Candidate");
      } else {
        const data = await candidateApi.getCandidates().find((candidate)=>{ 
          return candidate.id = id
        });
        if (mounted.current) {
          await setCandidate(data);
          setHeader("Edit Candidate Information");
        }
      }
    } catch (err) {
      console.error(err);
    }
  }, [mounted, id]);

  useEffect(() => {
    getCandidate(id);
  }, [getCandidate, id]);

  if (!candidate) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Modify Candidates</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 8,
        }}
      >
        <Container maxWidth={settings.compact ? "xl" : false}>
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item>
              <Typography color="textPrimary" variant="h5">
                {header}
              </Typography>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<ChevronRightIcon fontSize="small" />}
                sx={{ mt: 1 }}
              >
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  to="/"
                  variant="subtitle2"
                >
                  Candidates Overview
                </Link>
                <Typography color="textSecondary" variant="subtitle2">
                  Modify Candidate
                </Typography>
              </Breadcrumbs>
            </Grid>
          </Grid>
          <Box mt={3}>
            <CandidateEditForm candidate={candidate} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CandidateEdit;