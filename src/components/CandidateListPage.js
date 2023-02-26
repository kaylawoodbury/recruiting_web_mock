import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { candidateApi } from '../services/_mockApi_/candidateDetails';
import useMounted from "../hooks/useMounted";
import ChevronRightIcon from "../icons/ChevronRight";
import PlusIcon from "../icons/Plus";
import useSettings from "../hooks/useSettings";
import CandidateListTable from "./CandidateListTable";

const CandidateList = () => {
  const mounted = useMounted();
  const { settings } = useSettings();
  const [candidates, setCandidates] = useState([]);


  const getCandidates = useCallback(async () => {
    try {
      const data = await candidateApi.getCandidates(); 
      if (mounted.current) {
        setCandidates(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [mounted]);

  useEffect(() => {
    getCandidates();
  }, [getCandidates]);

  return (
    <>
      <Helmet>
        <title data-cy='candidate-title'>List of Candidates</title>
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
                Candidate List
              </Typography>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<ChevronRightIcon fontSize="small" />}
                sx={{ mt: 1 }}
              >
                <Typography color="textSecondary" variant="subtitle2">
                  Overview
                </Typography>
              </Breadcrumbs>
              <Box
                sx={{
                  mb: -1,
                  mx: -1,
                  mt: 1,
                }}
              >
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ m: -1 }}>
                <Button
                  color="primary"
                  startIcon={<PlusIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="contained"
                >
                  Add New Candidate
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
          <CandidateListTable candidates={candidates} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CandidateList;