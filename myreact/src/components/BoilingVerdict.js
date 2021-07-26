export default function BoilingVerdict({ celsius = 0 }) {
    if (celsius >= 100) {
        return <p>The water would Boil</p>;
    }
    return <p>The water would not Boil</p>;
}
