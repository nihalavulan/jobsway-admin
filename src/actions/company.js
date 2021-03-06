import { UNVERIFIEDCOMPANIES, VERIFIEDCOMPANY,VERIFIEDCOMPANIES,REJECTEDCOMPANY,BANNEDCOMPANY,BANNEDCOMPANIES,UNBANNEDCOMPANY,ALLTRANSACTIONS} from '../constants/actionTypes'
import * as api from '../api/index'

export const getUnVerifiedCompanies = (history) => async (dispatch) => {

    try {
        const {data} = await api.getUnVerifiedCompanies()
        dispatch({type:UNVERIFIEDCOMPANIES ,payload :data})
    } catch (error) {
        console.log(error);
    }
}

export const verifyCompany = (id,history) => async (dispatch) => {
    try {
        const res = await api.verifyCompany(id)
        dispatch({type:VERIFIEDCOMPANY ,payload :res.data})
        history.push('/')
    } catch (error) {
        console.log(error);
    }
}

export const rejectCompany = (id,reason,history) => async (dispatch) => {
    try {
        const res = await api.rejectCompany(id,reason)
        dispatch({type:REJECTEDCOMPANY ,payload :res.data})
        history.push('/')
    } catch (error) {
        console.log(error);
    }
}

export const getVerifiedCompanies = (history) => async (dispatch) => {
    try {
        const {data} = await api.getVerifiedCompanies()
        dispatch({type:VERIFIEDCOMPANIES ,payload :data})
    } catch (error) {
        console.log(error);
    }
}

export const banCompany = (id,history) => async (dispatch) => {
    try {
        const {data} = await api.banCompany(id)
        dispatch({type:BANNEDCOMPANY ,payload :data})
        history.push('/companies')
    } catch (error) {
        console.log(error);
    }
}

export const getBannedCompanies = () => async (dispatch) => {
    try {
        const {data} = await api.bannedCompanies()
        dispatch({type:BANNEDCOMPANIES ,payload :data})
    } catch (error) {
        console.log(error);
    }
}

export const unBanCompany = (id,history) => async (dispatch) => {
    try {
        const {data} = await api.unBanCompany(id)
        dispatch({type:UNBANNEDCOMPANY ,payload :data})
        history.push('/settings')
    } catch (error) {
        console.log(error);
    }
}

export const getTransaction = (history) => async (dispatch) => {
    try {
        const {data} = await api.getTransaction()
        dispatch({type:ALLTRANSACTIONS ,payload :data})
    } catch (error) {
        console.log(error);
    }
}
