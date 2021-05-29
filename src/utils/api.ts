import axios from 'axios'

import store from '../store'
import { hideLoader, showLoader } from '../store/state/common'

declare interface IMetaConfig {
	loadingMessage?: string
}

const constructUrl = (url: string) => {
	if (process.env.REACT_APP_API_BASE) {
		return `${process.env.REACT_APP_API_BASE}${url}`
	}
	return url
}

export const get = async <K>(
	url: string,
	headers?: Record<string, unknown>,
	metaConfig: IMetaConfig = { loadingMessage: '' }
) => {
	try {
		store.dispatch(showLoader(metaConfig.loadingMessage || ''))
		const { data } = await axios.get(constructUrl(url), {
			headers: headers
		})
		store.dispatch(hideLoader())
		return data as K
	} catch (e) {
		// global error handling
		throw new Error(e)
	}
}

export const post = async <K>(
	url: string,
	postData: Record<string, unknown>,
	headers?: Record<string, unknown>
) => {
	try {
		const { data } = await axios.post(constructUrl(url), postData, {
			headers: headers
		})
		return data as K
	} catch (e) {
		throw new Error(e)
	}
}

export const remove = async <K>(
	url: string,
	headers?: Record<string, unknown>
) => {
	try {
		const { data } = await axios.delete(constructUrl(url), {
			headers: headers
		})
		return data as K
	} catch (e) {
		throw new Error(e)
	}
}

export const patch = async <K>(
	url: string,
	patchData: Record<string, unknown>,
	headers?: Record<string, unknown>
) => {
	try {
		const { data } = await axios.patch(constructUrl(url), patchData, {
			headers: headers
		})
		return data as K
	} catch (e) {
		throw new Error(e)
	}
}

export const formPost = async <K>(
	url: string,
	formPostData: Record<string, unknown>,
	headers?: Record<string, unknown>
) => {
	try {
		const bodyFormData = new FormData()
		Object.keys(formPostData).forEach((key: string) => {
			//@ts-ignore
			bodyFormData.set(key, formPostData[key])
		})
		let defaultHeaders = {
			'Content-Type': 'multipart/form-data'
		}
		if (headers) {
			defaultHeaders = {
				...defaultHeaders,
				...headers
			}
		}
		const { data } = await axios.post(constructUrl(url), bodyFormData, {
			headers: defaultHeaders
		})
		return data as K
	} catch (e) {
		throw new Error(e)
	}
}
