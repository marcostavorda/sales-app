import { tailChase } from 'ldrs';
import { useParams } from "react-router-dom";
import { useGetDocument } from "../hooks/useGetDocument";
import DetailCard from "../components/DetailCard";
import Loader from "../components/Loader";

function Detail() {
    const { idProduct } = useParams();

    const { data, error, loading } = useGetDocument(idProduct);

    tailChase.register()

    return (
        <>{loading ? <Loader /> : <DetailCard data={data} />}</>
    )
}

export default Detail;