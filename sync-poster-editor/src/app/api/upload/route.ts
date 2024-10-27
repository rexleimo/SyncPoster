import {IncomingForm} from 'formidable';
import {NextResponse} from "next/server";
import path from "node:path";
import * as fs from "node:fs";


export async function GET(request: Request) {
    return Response.json({
        name: "google"
    })
}

export async function POST(req: Request) {
    const form = new IncomingForm();

    return new Promise((resolve, reject) => {
        form.parse(req, (err: boolean, fields: any, files: any) => {
            if (err) {
                return resolve(NextResponse.json({message: '文件解析失败'}, {status: 500}));
            }

            const file = files.file;

            if (!file) {
                return resolve(NextResponse.json({message: '未选择文件'}, {status: 400}));
            }

            const oldPath = file.filepath;
            const newPath = path.join(process.cwd(), 'public', 'uploads', file.originalFilename);

            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    return resolve(NextResponse.json({message: '文件保存失败'}, {status: 500}));
                }

                return resolve(NextResponse.json({filename: file.originalFilename}, {status: 200}));
            });
        });
    });
}