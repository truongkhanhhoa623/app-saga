import './styles.scss'

export default function Loading(props: any){

    const {loading} = props

    if(!loading) return null

    return (
        <div className="loader">
        <div className="loaderBar"></div>
      </div>
    )
}