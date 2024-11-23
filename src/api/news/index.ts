import { useQuery } from "@tanstack/react-query"
import { newsClient } from "../apiClient"
import { NEWS_API } from "../consts"
import axios from "axios"


export const getNews =({ page, pageSize }: any)=>{
    return useQuery({
        queryKey:["news"],
        queryFn:async ()=>{
            const response = await axios.get(`${NEWS_API}?page=${page}&pageSize=${pageSize}`)
            return response.data
        }
    })
}