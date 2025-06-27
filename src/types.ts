export type File = {
  type: "file";
  id: string;
  name: string;
  parentFolderId: string | null;
};

export type Folder = {
  type: "folder";
  id: string;
  name: string;
  parentFolderId: string | null;
};
