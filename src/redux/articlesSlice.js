import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchArticles } from "../services/newsApi";

export const getArticles = createAsyncThunk(
  "articles/getArticles",
  async ({ category, page, searchQuery }) => {
    const articles = await fetchArticles(category, page, searchQuery);
    return articles;
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    status: null,
    error: null,
    category: "",
    page: 1,
    searchQuery: "", // Add searchQuery to the state
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload; // Handle searchQuery action
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.status = "succeeded";
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setPage, setSearchQuery } = articlesSlice.actions;

export default articlesSlice.reducer;
