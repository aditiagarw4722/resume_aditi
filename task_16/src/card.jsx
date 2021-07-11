import "./styles.css";

function Card() {
    function Image() {
        return (
            <img
                src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e740f3207adf00006db9d14%2F960x0.jpg%3Ffit%3Dscale"
                alt=""
            />
        );
    }
    return (
        <div className="card">
            <Image />
        </div>
    );
}

export default Card;