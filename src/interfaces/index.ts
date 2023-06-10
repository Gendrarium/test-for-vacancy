export interface IHandleMenuClick {
  id: number;
  arr?: { key: string; value: string }[];
  newTitle: string;
  num?: number;
}

export interface IMenuList {
  title: string;
  arr?: { key: string; value: string }[];
  id?: number;
  num?: number;
}
