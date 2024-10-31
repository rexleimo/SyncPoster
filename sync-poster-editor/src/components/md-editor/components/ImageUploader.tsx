import {Command} from "react-mde";

const ImageUploaderCommand: Command = {
    icon: () => (
        <span role="img" aria-label="nice">
            📸
        </span>
    ),
    execute: opts => {

        const input = document.createElement("input");
        input.type = "file"
        input.onchange = async (event: Event) => {
            const file = (event.target as HTMLInputElement).files?.[0];
            if (!file) return;

            // 这里你可以实现图片上传逻辑，比如上传到云存储服务（如 AWS S3, Cloudinary 等）
            // 或者上传到你自己的服务器
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });

                const data = await response.json();
                const imageUrl = data.url; // 假设服务器返回图片的 URL

                const imageMarkdown = `![Uploaded Image](${imageUrl})`;

                opts.textApi.replaceSelection("\n" + imageMarkdown);

            } catch (error) {
                console.error('Error uploading file:', error);
            } finally {
            }
        }
        input.click()
    }
};

export default ImageUploaderCommand;