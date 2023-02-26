import CandidateList from "./components/CandidateOverview/CandidateList";
import CandidateEdit from "./components/CandidateDetails/CandidateEdit";

const routes = [
  {
    path: "/",
    element: <CandidateList />,
  },

      {
        path: "/candidate/edit/:id",
        element: <CandidateEdit />,
      },
      {
        path: "/candidate/edit",
        element: <CandidateEdit />,
      },
    ]

export default routes;