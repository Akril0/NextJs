import {advertisements} from '../data/advertisements.json';
import fs from 'fs/promises';
import path from 'path';
import {NextResponse} from "next/server";
import * as events from "events";

const emitter = new events.EventEmitter()

interface RequestData {
    yourDataKey: string;
}


interface ResponseData {
    message: string;
}

export async function GET(req: Request) {

    return NextResponse.json(advertisements);

}

// export async function POST() {
//     try {
//         // Путь к вашему JSON файлу
//         const filePath = path.join(process.cwd(), 'data', 'advertisements.json');
//
//         // Чтение файла
//         const fileData = await fs.readFile(filePath);
//         const data = JSON.parse(fileData.toString());
//
//         // Обновление данных (пример)
//         data.advertisements.push(req.body); // Обновление или добавление новых значений
//         console.log()
//         // Перезапись файла
//         await fs.writeFile(filePath, JSON.stringify(data, null, 2));
//
//         return res.status(200).json({message: 'Файл обновлен'});
//     } catch (error) {
//         res.status(500).json({message: 'Ошибка при обновлении файла'});
//     }
// }


