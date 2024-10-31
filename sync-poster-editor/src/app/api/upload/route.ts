import fs from 'fs';
import path from 'path';
import {NextRequest, NextResponse} from 'next/server';

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
        return NextResponse.json({error: 'No file provided'}, {status: 400});
    }

    const uploadDir = path.join(process.cwd(), 'public', 'uploads');

    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, {recursive: true});
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = file.name;
    const filePath = path.join(uploadDir, fileName);

    fs.writeFileSync(filePath, buffer);

    const imageUrl = `/uploads/${fileName}`;
    return NextResponse.json({url: imageUrl}, {status: 200});
}