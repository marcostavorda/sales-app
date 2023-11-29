import LogoImage from "./LogoImage";

function Logo({ imageSource, altText }) {
    return (
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <LogoImage imageSource={imageSource} altText={altText} />
        </label>
    )
}

export default Logo