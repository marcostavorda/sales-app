export default function LogoImage({ imageSource, altText }) {
    return (
        <div className="w-10 ">
            <img src={imageSource} alt={altText} />
        </div>
    )
}