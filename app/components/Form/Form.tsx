import styles from "./Form.module.css";
import {FormEvent, useState} from "react";
import {getCoordinatesForAddress} from "@/app//utils/getCoordinates";
import {useDispatch} from "react-redux";
import {setError} from "@/app/redux/slices/errorSlice";
import {FormAdvertisementType} from "@/app/types/FormAdvertisementType";
import {addPost} from "@/app/redux/slices/postSlice";

type FormErrors = {
    title?: string,
    description?: string,
    price?: string,
    name?: string,
    phone?: string,
    city?: string,
    street?: string
}


const Form = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [errors, setErrors] = useState<FormErrors>({});

    const dispatch = useDispatch();

    const validateForm = () => {
        const newErrors: FormErrors = {};

        if (!title) newErrors.title = 'Заголовок не може бути порожнім.';

        if (!description) newErrors.description = 'Опис не може бути порожнім.';

        if (!price) newErrors.price = 'Ціна не може бути порожньою.';
        else if (!/^\d+$/.test(price)) newErrors.price = 'Ціна повинна бути числом.';

        if (!name) newErrors.name = 'Ім\'я не може бути порожнім.';

        if (!phone) newErrors.phone = 'Телефон не може бути порожнім.';

        if (!city) newErrors.city = 'Місто не може бути порожнім.';

        if (!street) newErrors.street = 'Вулиця не може бути порожньою.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            const coordinates = await getCoordinatesForAddress(`${city}, ${street}`);
            if (coordinates) {
                const newPost:FormAdvertisementType = {
                    title,
                    description,
                    price: +price,
                    contact: {
                        name,
                        phone,
                    },
                    location: `${city}, ${street}`,
                    coordinates: {
                        latitude: coordinates[0],
                        longitude: coordinates[1],
                    },
                };
                dispatch(addPost(newPost))

            } else {
                dispatch(setError("Місце не знайдено"));
            }
        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <div className={styles.form}>
                <div className={styles.desription}>
                    <div className={styles.inputLabel}>
                        <label htmlFor="title">Заголовок: </label>
                        <input type="text" id="title" name="title" value={title}
                               onChange={(e) => setTitle(e.target.value)}
                               className={(errors.title ? styles.inputError : '')}/>

                        {errors.title && <div className={styles.error}>{errors.title}</div>}
                    </div>
                    <div className={styles.inputLabel}>
                        <label htmlFor="description">Опис: </label>
                        <textarea id="description" name="description" value={description}
                                  onChange={(e) => setDescription(e.target.value)}
                                  className={(errors.description ? styles.inputError : '')}/>

                        {errors.description && <div className={styles.error}>{errors.description}</div>}
                    </div>
                    <div className={styles.inputLabel}>
                        <label htmlFor="price">Ціна: </label>
                        <input type="text" id="price" name="price" value={price}
                               onChange={(e) => setPrice(e.target.value)}
                               className={(errors.price ? styles.inputError : '')}/>

                        {errors.price && <div className={styles.error}>{errors.price}</div>}
                    </div>
                </div>

                <div className={styles.contacts}>
                    <div className={styles.inputLabel}>
                        <label htmlFor="name">Ім'я: </label>
                        <input type="text" id="name" name="name" value={name}
                               onChange={(e) => setName(e.target.value)}
                               className={(errors.name ? styles.inputError : '')}/>
                        {errors.name && <div className={styles.error}>{errors.name}</div>}
                    </div>
                    <div className={styles.inputLabel}>
                        <label htmlFor="phone">Телефон: </label>
                        <input type="tel" id="phone" name="phone" pattern="[\+]\d{3}\d{2}\d{3}\d{2}\d{2}" value={phone}
                               onChange={(e) => setPhone(e.target.value)}
                               className={(errors.phone ? styles.inputError : '')}/>
                        {errors.phone && <div className={styles.error}>{errors.phone}</div>}
                    </div>
                </div>
                <div className={styles.coordinates}>
                    <div className={styles.inputLabel}>
                        <label htmlFor="city">Місто: </label>
                        <input type="text" id="city" name="city" value={city}
                               onChange={(e) => setCity(e.target.value)}
                               className={(errors.city ? styles.inputError : '')}/>

                        {errors.city && <div className={styles.error}>{errors.city}</div>}
                    </div>
                    <div className={styles.inputLabel}>
                        <label htmlFor="street">Вулиця: </label>
                        <input type="text" id="street" name="street" value={street}
                               onChange={(e) => setStreet(e.target.value)}
                               className={(errors.street ? styles.inputError : '')}/>

                        {errors.street && <div className={styles.error}>{errors.street}</div>}
                    </div>
                </div>
            </div>

            <button type="submit">Підтвердити</button>
        </form>

    );
};

export default Form;
