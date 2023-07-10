// type Movies = {
//     page: number
//     results: {

//         poster_path: string | null

//         adult: boolean

//         overview: string
        
//         release_date: string 
//         genre_ids: number[]

//         id: number

//         original_title: string

//         original_language: string

//         title: string

//         backdrop_path: string | null

//         popularity: number

//         vote_count: number

//         video: boolean

//         vote_average: number
//     }[]

//     total_results: number

//     total_pages: number

// }
type TorrentObj = {
    "url": string,
    "hash": string,
    "quality": string,
    "type": string,
    "seeds": number,
    "peers": number,
    "size": string,
    "size_bytes": number,
    "date_uploaded": string,
    "date_uploaded_unix": number
}

type Movies = {
    "id": number,
    "url": string,
    "imdb_code": string,
    "title": string,
    "title_english": string,
    "title_long": string,
    "slug": string,
    "year": number,
    "rating": number,
    "runtime": number,
    "genres": string[],
    "summary": string,
    "description_full": string,
    "synopsis": string,
    "yt_trailer_code": string,
    "language": string,
    "mpa_rating": string,
    "background_image": string,
    "background_image_original": string,
    "small_cover_image": string,
    "medium_cover_image": string,
    "large_cover_image": string,
    "state": string,
    "torrents": TorrentObj[],
    "date_uploaded": string,
    "date_uploaded_unix": number
}

export type MoviesApiRes = {
    "status": string,
    "status_message": string,
    "data": {
        "movie_count": number,
        "limit": number,
        "page_number": number,
        "movies": Movies[]
    },
    "@meta": {
        "server_time": number,
        "server_timezone": string,
        "api_version": nubmer,
        "execution_time": string
    }
   
}

export interface ModalProps {
    component?: React.FC<any>;
    props?: { [key: string]: unknown };
    isVisible?: boolean;
    closable?: boolean;
    onClose?: Function;
    closeModal?: Function;
    width?: number;
    title?: string;
    className?: string;
    enableBottomSheet?: boolean;
    fullScreen?: boolean;
    closeIcon?: boolean;
    headingClassName?: boolean;
    headingComponent?: React.FC<any>;
    bottomSheetFooter?: React.FC<any>;
    bottomSheetClassName?: string;
    modalFooter?: JSX.Element[];
    closeable?: boolean;
    centered?: boolean;
  }
  //types for confirmation modals
  export interface ConfirmationModalProps {
    title?: string;
    message?: string;
    onCancel?: Function;
    onOkay?: Function;
    cancelLabel?: string;
    okayLabel?: string;
    isHeading?: string;
    isBackdropCloseable?: boolean;
    closable?: boolean;
  }
  //types for async confirmation modals
  export interface AsyncConfirmationModalProps {
    title?: string;
    message?: string;
    cancelLabel?: string;
    okayLabel?: string;
    closable?: boolean;
  }