import PropTypes from "prop-types";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  Card,
  Grid,
  Switch,
  TextField,
  Typography,
  CardHeader,
  Divider,
} from "@material-ui/core";
import { recruitingStage, language, hired, roll } from "../../../constants";

// with more time would want to find more elegant way to convert/use the enums for the dropdown lists
const rollOptions = [
  {
    value: "DEVELOPER",
    label: "Developer",
  },
  {
    label: "Product Manager",
    value: "PRODUCT_MANAGER",
  },
  {
    label: "Enegineering Manager",
    value: "ENGINEERING_MANAGER",
  },
  {
    label: "Data Scientist",
    value: "DATA_SCIENTIST",
  },
  {
    label: "Other",
    value: "OTHER",
  },
];

const languageOptions = [
  {
    value: "ENGLISH",
    label: "English",
  },
  {
    label: "Swedish",
    value: "SWEDISH",
  },
  {
    label: "German",
    value: "GERMAN",
  },
];

const hiredOptions = [
  {
    value: "NA",
    label: "NA",
  },
  {
    label: "Yes",
    value: "YES",
  },
  {
    label: "No",
    value: "NO",
  },
];

const recruitingStageOptions = [
  {
    value: "CONTACT",
    label: "Contact",
  },
  {
    label: "Dialogue",
    value: "DIALOGUE",
  },
  {
    label: "Interview",
    value: "INTERVIEW",
  },
  {
    label: "Offer",
    value: "OFFER",
  },
  {
    label: "Closed",
    value: "CLOSED",
  },
];

const CandidateEditForm = (props) => {
  const { candidate, ...other } = props;
  let type = candidate.id > 0 ? "edit" : "add";
  let submitButtonText =
    type === "edit" ? "Update Candidate Details" : "Add New Candidate";

  return (
    <Formik
      initialValues={{
        firstName: candidate.firstName || "",
        lastName: candidate.lastName || "",
        email: candidate.email || "",
        phoneNumber: candidate.phoneNumber || "",
        city: candidate.city || "",
        country: candidate.country || "Sweden",
        street: candidate.street || "",
        zip: candidate.zip || "",
        language: candidate.language || language.ENGLISH,
        recruitingStage: candidate.recruitingStage || recruitingStage.CONTACT,
        recruitHired: candidate.recruitHired || hired.NA,
        roll: candidate.roll || roll.DEVELOPER,
        other: candidate.other || "",
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("E-post is required"),
        firstName: Yup.string().max(255).required("First name required"),
        lastName: Yup.string().max(255).required("Last name required"),
        mobilNummer: Yup.string().max(15),
        city: Yup.string().max(50),
        country: Yup.string().max(50),
        street: Yup.string().max(150),
        zip: Yup.string().max(20),
        language: Yup.string(),
        recruitingStage: Yup.string().required("Recruiting stage required"),
        recruitHired: Yup.string(),
        roll: Yup.string(),
        other: Yup.string().max(1000)
      })}
      onSubmit={async (
        values,
        { resetForm, setErrors, setStatus, setSubmitting }
      ) => {
        if (type === "edit") {
          //will update this later
          // push changes to redux
        } else {
         // push changes to redux
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        setFieldTouched,
        touched,
        values,
      }) => (
        <form onSubmit={handleSubmit} {...other}>
          <Card>
            <Box sx={{ p: 3 }}>
              <CardHeader title="Contact Details" />
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.firstName && errors.firstName)}
                    fullWidth
                    helperText={touched.firstName && errors.firstName}
                    label="First Name"
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.firstName}
                    variant="outlined"
                    data-cy="new-cand-firstName"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.lastName && errors.lastName)}
                    fullWidth
                    helperText={touched.lastName && errors.lastName}
                    label="Last Name"
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.lastName}
                    variant="outlined"
                    data-cy="new-cand-lastName"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label="Email"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.email}
                    variant="outlined"
                    data-cy="new-cand-email"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                    fullWidth
                    helperText={touched.phoneNumber && errors.phoneNumber}
                    label="Phone Number"
                    name="phoneNumber"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phoneNumber}
                    variant="outlined"
                    data-cy="new-cand-phone"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.country && errors.country)}
                    fullWidth
                    helperText={touched.country && errors.country}
                    label="Country"
                    name="country"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.country}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.city && errors.city)}
                    fullWidth
                    helperText={touched.city && errors.city}
                    label="City"
                    name="city"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.city}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.street && errors.street)}
                    fullWidth
                    helperText={touched.street && errors.street}
                    label="Street Address"
                    name="street"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.street}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.zip && errors.zip)}
                    fullWidth
                    helperText={touched.zip && errors.zip}
                    label="Zip Code"
                    name="zip"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.zip}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Divider sx={{ my: 3 }} />
              <CardHeader title="Recruitment Details" />
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.roll && errors.roll)}
                    fullWidth
                    helperText={touched.roll && errors.roll}
                    label="Roll"
                    name="roll"
                    onChange={handleChange}
                    select
                    SelectProps={{ native: true }}
                    required
                    value={values.roll}
                    variant="outlined"
                    data-cy="cand-roll"
                    >
                  {rollOptions.map((roll) => (
                      <option key={roll.value} value={roll.value}>
                        {roll.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.recruitingStage && errors.recruitingStage)}
                    fullWidth
                    helperText={touched.recruitingStage && errors.recruitingStage}
                    label="Recruiting Stage"
                    name="recruitingStage"
                    onChange={handleChange}
                    select
                    SelectProps={{ native: true }}
                    required
                    value={values.recruitingStage}
                    variant="outlined"
                    data-cy="cand-recruitingStage"
                    >
                  {recruitingStageOptions.map((recruitingStage) => (
                      <option key={recruitingStage.value} value={recruitingStage.value}>
                        {recruitingStage.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Candidate Hired"
                    name="recruitHired"
                    onChange={handleChange}
                    select
                    SelectProps={{ native: true }}
                    value={values.recruitHired}
                    variant="outlined"
                  >
                    {hiredOptions.map((hired) => (
                      <option key={hired.value} value={hired.value}>
                        {hired.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Candidate's Language"
                    name="language"
                    onChange={handleChange}
                    select
                    SelectProps={{ native: true }}
                    value={values.language}
                    variant="outlined"
                  >
                    {languageOptions.map((language) => (
                      <option key={language.value} value={language.value}>
                        {language.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Notes"
                    name="other"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.other}
                    variant="outlined"
                    multiline
                  />
                </Grid>
                
              </Grid>
              <Box sx={{ mt: 2 }}>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                  data-cy="sbmt-bttn"
                >
                  {submitButtonText}
                </Button>
              </Box>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
};

CandidateEditForm.propTypes = {
  candidate: PropTypes.object.isRequired,
};

export default CandidateEditForm;