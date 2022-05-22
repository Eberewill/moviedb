
export interface MediaItem {
    poster_path ? : string 
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: number[],
    id: number,
    original_title: string,
    original_language: string,
    title: string,
    backdrop_path ?: string 
    popularity?: number,
    vote_count: string,
    video?: boolean,
    vote_average: number
}

export interface ResponseInterface {
    total_pages: number | undefined,
    total_results: number | undefined,
    results: MediaItem[],
    page: number | undefined

}