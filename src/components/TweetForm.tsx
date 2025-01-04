import { Box, Button, TextField } from "@mui/material";
import { Formik, } from "formik";
import * as Yup from "yup";
import { usePostTweet } from "../hooks/usePostTweet";

const TweetForm = () => {
  const { postTweet, isLoading, error } = usePostTweet();

  const initialValues = { tweet: "" };

  const validationSchema = Yup.object({
    tweet: Yup.string()
      .max(280, "Tweet must be 280 characters or less")
      .required("Tweet cannot be empty"),
  });

  const handleSubmit = async (values: { tweet: string }, { resetForm }: any) => {
    await postTweet(values);
    resetForm(); // Reset the form only if the tweet is successfully posted
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, errors, touched, handleBlur }) => (
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            {/* Tweet Input */}
            <TextField
              name="tweet"
              variant="outlined"
              multiline
              rows={3}
              placeholder="What's happening?"
              fullWidth
              value={values.tweet}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.tweet && Boolean(errors.tweet)}
              helperText={touched.tweet && errors.tweet}
              disabled={isLoading}
            />

            {/* Error Message */}
            {error && (
              <Box sx={{ color: "red", fontSize: "0.875rem", mt: 1 }}>
                {error}
              </Box>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, alignSelf: "flex-end" }}
              disabled={isLoading}
            >
              {isLoading ? "Posting..." : "Tweet"}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default TweetForm;
