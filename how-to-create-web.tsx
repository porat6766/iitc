// import React, { useState } from "react";
// import { useCreateSite } from "../hooks/useSiteHooks";
// import { ISite } from "../types/siteTypes";

// const CreateSiteForm = () => {
//   const [formData, setFormData] = useState<Omit<ISite, "save" | "createdAt" | "updatedAt">>({
//     data: JSON.stringify({
//       owner: { username: "JohnDoe" },
//       headerData: { title: "Welcome", menuItems: [] },
//       pages: [],
//       footerData: { text: "Footer text" },
//     }),
//     owner: "",
//     screenShot: "",
//     name: "",
//     domain: "",
//   });

//   const { mutate: createSite, isLoading, isError, isSuccess, data } = useCreateSite();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     createSite(formData); // שולח את הנתונים ל-hook
//   };

//   return (
//     <div>
//       <h1>Create a New Site</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Owner:
//           <input
//             type="text"
//             name="owner"
//             value={formData.owner}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Domain:
//           <input
//             type="text"
//             name="domain"
//             value={formData.domain}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           ScreenShot URL (optional):
//           <input
//             type="text"
//             name="screenShot"
//             value={formData.screenShot}
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? "Creating..." : "Create Site"}
//         </button>
//       </form>
//       {isSuccess && <p>Site created successfully! ID: {data?.id}</p>}
//       {isError && <p>Error occurred while creating site.</p>}
//     </div>
//   );
// };

// export default CreateSiteForm;
