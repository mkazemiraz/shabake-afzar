// import { useLocation, Link } from "react-router-dom";
// import { Breadcrumbs, Typography } from "@mui/material";
// import { convertBreadcrumbs } from "@utils/index";
// import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
// const Breadcrumb = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);
//   return (
//     <>
//       <Breadcrumbs
//         aria-label="KChat Breadcrumb"
//         separator={<NavigateBeforeIcon fontSize="small" />}
//       >
//         {pathnames.map((value, index) => {
//           const last = index === pathnames.length - 1;
//           const to = `/${pathnames.slice(0, index + 1).join("/")}`;
//           return last ? (
//             <Typography key={to}>{convertBreadcrumbs(value)}</Typography>
//           ) : (
//             <Link to={to} key={to}>
//               {convertBreadcrumbs(value)}
//             </Link>
//           );
//         })}
//       </Breadcrumbs>
//     </>
//   );
// };

// export default Breadcrumb;
