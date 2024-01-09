

export async function getCoordinatesForAddress(address: string): Promise<[number, number] | undefined> {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
        return undefined;
    }
    const { lat, lon } = data[0];
    return [parseFloat(lat), parseFloat(lon)];
}

