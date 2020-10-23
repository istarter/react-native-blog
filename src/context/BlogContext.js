import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);

// export const BlogProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(blogReducer, []);

//   addBlogPost = () => {
//     setBlogPosts([
//       ...blogPosts,
//       { title: `Blog Post #${blogPosts.length + 1}` },
//     ]);
//   };

//   return (
//     <BlogContext.Provider value={{ data: state, addBlogPost }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };
