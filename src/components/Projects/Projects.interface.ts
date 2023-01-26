interface IProjectItem {
    title: string;
    image: string;
    route: string;
    bgColor?: string;
    bgImage?: string;
}

interface IStyledProjectItem {
    bgColor?: string;
    bgImage?: string;
}

export type { IProjectItem, IStyledProjectItem }