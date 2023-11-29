import { Ring } from '@uiball/loaders'
import { tailChase } from 'ldrs';

tailChase.register()

function Loader() {
    return (
        <span className="flex items-center justify-center">
            <l-tail-chase
                size="40"
                speed="1.75"
                color="black"
            ></l-tail-chase>
        </span>
    )
}

export default Loader;