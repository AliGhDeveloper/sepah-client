import { gql } from "@apollo/client";

export const getNews = gql`
    query GETNEWS($category: String) {
        getNews(category: $category){
            data {
                id
                title 
                image
                content
                date
                category 
                views
            }
            columnType 
        }
    }
`

export const getNewsById = gql`
    query GET_NEWS_BY_ID ($id: String) {
        getNewsById (id : $id) {
                id
                title 
                content
                date
                image 
                category
                views 
            }
    }
`

export const getCats = gql`
    query GET_CATS {
        getCats {
            name 
            id
        }
    }
`


export const createNews = gql`
    mutation CREATENEWS($category : String, $title : String, $content: String, $image : String) {
        createNews(category : $category, title : $title, content: $content, image : $image ) {
            data {
                title
                content
                image
                date
                category
            }
            columnType
        }
    }
`

export const changeNewsStyle = gql`
    mutation CHANGE_NEWS_STYLE($columnType : String) {
        changeNewsStyle( columnType : $columnType ) {
            data {
                title
                content
                image
                image
            }
            columnType
        }
    }
`