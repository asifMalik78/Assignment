import React from "react";
import EditModal from "../modal/editModal";
import DeleteModal from "../modal/deleteModal";

const Portal = ({ curr }) => {
  const timeConverter = (value) => {
    const createdAt = new Date(value);
    const optionsTime = { hour: "numeric", minute: "numeric", hour12: true };
    const optionsDate = { day: "2-digit", month: "2-digit", year: "numeric" };

    const formattedTime = createdAt.toLocaleTimeString(undefined, optionsTime);
    const currentDateFormat = createdAt.toLocaleDateString(
      "en-US",
      optionsDate
    );
    return currentDateFormat.split("/").join("-") + "/" + formattedTime;
  };
  return (
    <div className="max-w-sm w-full border-2 border-gray-200 px-4 py-3 flex flex-col gap-1 rounded-md drop-shadow-sm flex-shrink-0 max-h-[30rem] h-fit overflow-y-auto">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-black font-semibold text-2xl">Title</h1>
          <div>{curr.title}</div>
        </div>

        <div className="flex items-center gap-4">
          <EditModal curr={curr}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="cursor-pointer"
              fill="#1d4ed8"
            >
              <path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"></path>
              <path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"></path>
            </svg>
          </EditModal>

          <DeleteModal curr={curr}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="cursor-pointer"
              fill="#ee0000"
            >
              <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
            </svg>
          </DeleteModal>
        </div>
      </div>

      <div>
        <h1 className="text-black font-semibold text-2xl">Description</h1>
        <div>{curr.desc}</div>
      </div>

      <div className="mt-3">
        <div className="flex flex-col">
          <div className="grid grid-cols-[1fr_2fr] gap-2">
            <span className="text-black font-semibold">App Code </span>{" "}
            <div className="flex items-center gap-4">{curr.appCode}</div>
          </div>

          <div className="grid grid-cols-[1fr_2fr] gap-2">
            <span className="text-black font-semibold">Project Id </span>{" "}
            <div className="flex items-center gap-4">{curr.projectId}</div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-[1fr_2fr] gap-2">
            <span className="text-black font-semibold">Model Id </span>{" "}
            <div>{curr.modelId}</div>
          </div>

          <div className="grid grid-cols-[1fr_2fr] gap-2">
            <span className="text-black font-semibold">Version </span>{" "}
            <div className="flex items-center gap-4">{curr.version}</div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-[1fr_2fr] gap-2">
            <span className="text-black font-semibold">Created At </span>{" "}
            <div className="flex items-center gap-4">
              {timeConverter(curr.createdAt)}
            </div>
          </div>

          <div className="grid grid-cols-[1fr_2fr] gap-2">
            <span className="text-black font-semibold">Updated At </span>{" "}
            <div className="flex items-center gap-4">
              {timeConverter(curr.updatedAt)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_2fr] gap-2">
          <span className="text-black font-semibold">Created By </span>{" "}
          <div className="flex items-center gap-4">{curr.createdBy.name}</div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
