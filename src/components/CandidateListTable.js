import { useState } from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  IconButton,
  InputAdornment,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Tabs,
  TextField,
  Typography,
} from "@material-ui/core";
import ArrowRightIcon from "../icons/ArrowRight";
import PencilAltIcon from "../icons/PencilAlt";
import SearchIcon from "../icons/Search";
import Scrollbar from "./molecules/Scrollbar";

const tabs = [
  {
    label: "All",
    value: "all",
  },
  // do if extra time
  // {
  //   label: "Active Candidates",
  //   value: "inRecruitmentProcess",
  // },
  // {
  //   label: "Closed Candidates",
  //   value: "closed",
  // },
];

const sortOptions = [
  {
    label: "Alphbetically (A-Z)",
    value: "firstName|asc",
  },
  {
    label: "Alphbetically (Z-A)",
    value: "firstName|desc",
  },
  // add additional sorts if time
];

const applyFilters = (candidates, query, filters) =>
  candidates.filter((candidate) => {
    let matches = true;

    if (query) {
      const properties = ["email", "firstName", "lastName", "recruitingStage"];
      let containsQuery = false;
      properties.forEach((property) => {
        if (candidate[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && candidate[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });

const applyPagination = (candidates, page, limit) =>
  candidates.slice(page * limit, page * limit + limit);

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
};

const getComparator = (order, orderBy) =>
  order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);

const applySort = (candidates, sort) => {
  const [orderBy, order] = sort.split("|");
  const comparator = getComparator(order, orderBy);
  const stabilizedThis = candidates.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const newOrder = comparator(a[0], b[0]);

    if (newOrder !== 0) {
      return newOrder;
    }

    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
};

const CandidateListTable = (props) => {
  const { candidates, ...other } = props;
  const [currentTab, setCurrentTab] = useState("all");
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState(sortOptions[0].value);
  const [filters, setFilters] = useState({
    hasAcceptedMarketing: null,
    isProspect: null,
    isReturning: null,
  });

  const handleTabsChange = (event, value) => {
    const updatedFilters = {
      ...filters,
      hasAcceptedMarketing: null,
      isProspect: null,
      isReturning: null,
    };

    if (value !== "all") {
      updatedFilters[value] = true;
    }

    setFilters(updatedFilters);
    setSelectedCandidates([]);
    setCurrentTab(value);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleSelectAllCandidates = (event) => {
    setSelectedCandidates(
      event.target.checked ? candidates.map((candidate) => candidate.id) : []
    );
  };

  const handleSelectOneCandidate = (event, candidateId) => {
    if (!selectedCandidates.includes(candidateId)) {
      setSelectedCandidates((prevSelected) => [...prevSelected, candidateId]);
    } else {
      setSelectedCandidates((prevSelected) =>
        prevSelected.filter((id) => id !== candidateId)
      );
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10));
  };

  const filteredCandidates = applyFilters(candidates, query, filters);
  const sortedCandidates = applySort(filteredCandidates, sort);
  const paginatedCandidates = applyPagination(sortedCandidates, page, limit);
  // const enableBulkActions = selectedCandidates.length > 0; //may not use this
  const selectedSomeCandidates =
    selectedCandidates.length > 0 && selectedCandidates.length < candidates.length;
  const selectedAllCandidates = selectedCandidates.length === candidates.length;

  return (
    <Card {...other}>
      <Tabs
        indicatorColor="primary"
        onChange={handleTabsChange}
        scrollButtons="auto"
        textColor="primary"
        value={currentTab}
        variant="scrollable"
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>
      <Divider />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          m: -1,
          p: 2,
        }}
      >
        <Box
          sx={{
            m: 1,
            maxWidth: "100%",
            width: 500,
          }}
        >
          <TextField
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            onChange={handleQueryChange}
            placeholder="Search Candidates"
            value={query}
            variant="outlined"
          />
        </Box>
        <Box
          sx={{
            m: 1,
            width: 240,
          }}
        >
          <TextField
            label="Sort By"
            name="sort"
            onChange={handleSortChange}
            select
            SelectProps={{ native: true }}
            value={sort}
            variant="outlined"
            data-cy='candidate-filter'
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value} data-cy={option.value} >
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>
      </Box>
      {/* {enableBulkActions && (
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              backgroundColor: "background.paper",
              mt: "6px",
              position: "absolute",
              px: "4px",
              width: "100%",
              zIndex: 2,
            }}
          >
            <Checkbox
              checked={selectedAllCandidates}
              color="primary"
              indeterminate={selectedSomeCandidates}
              onChange={handleSelectAllCandidates}
            />
            <Button color="primary" sx={{ ml: 2 }} variant="outlined">
              Delete
            </Button>
            <Button color="primary" sx={{ ml: 2 }} variant="outlined">
              Edit // maybe edit could change the hired or recruitment stage? but could remove this for now
            </Button>
          </Box>
        </Box>
      )} */}
      <Scrollbar>
        <Box sx={{ minWidth: 700 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAllCandidates}
                    color="primary"
                    indeterminate={selectedSomeCandidates}
                    onChange={handleSelectAllCandidates}
                  /> 
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Stage</TableCell>
                <TableCell>Language</TableCell>
                <TableCell>Hired</TableCell>
                <TableCell align="right">Edit / View</TableCell> 
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedCandidates.map((candidate) => {
                const isCandidateSelected = selectedCandidates.includes(
                  candidate.id
                );

                return (
                  <TableRow
                    hover
                    key={candidate.id}
                    selected={isCandidateSelected}
                  >  
                    {/* if time finish adding logic for handling group actions, like deleting. Have checkboxes set up but need to handle actions */}
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isCandidateSelected}
                        color="primary"
                        onChange={(event) =>
                          handleSelectOneCandidate(event, candidate.id)
                        }
                        value={isCandidateSelected}
                      />
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <Avatar src={candidate.avatar} />

                        <Box sx={{ ml: 1 }}>
                          {/* add if extra time
                           <Link
                            color="inherit"
                            component=
                            to=
                            variant="subtitle2"
                            data-cy='candidate-name'
                          > */}
                            {candidate.firstName} {candidate.lastName}
                          {/* </Link> */}
                          <Typography color="textSecondary" variant="body2">
                            {candidate.email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{candidate.recruitingStage}</TableCell>
                    <TableCell>{candidate.language}</TableCell>
                    <TableCell>{candidate.recruitHired}</TableCell>
                    <TableCell align="right">
                      <IconButton
                      //to add later
                        // component=
                        // to=
                      >
                        <PencilAltIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                      // to add later
                        // component=
                        // to=
                      >
                        <ArrowRightIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={filteredCandidates.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CandidateListTable.propTypes = {
  candidates: PropTypes.array.isRequired,
};

export default CandidateListTable;