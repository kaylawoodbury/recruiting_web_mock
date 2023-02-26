import {useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { setAllCandidateDetails } from "../../store/candidate-store";
import ChevronRightIcon from "../../icons/ChevronRight";
import PlusIcon from "../../icons/Plus";
import useSettings from "../../hooks/useSettings";
import CandidateListTable from "./molecules/CandidateListTable";
import { useDispatch, useSelector } from 'react-redux';

const CandidateList = () => {
  const { settings } = useSettings();
  const candidates = useSelector((state) => state.candidates.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllCandidateDetails());
  }, [dispatch]);

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
                  Candidates Overview
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
                  to="/candidate/edit"
                  data-cy="new-candidate-bttn"
                  component={RouterLink}
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