import { Space, Table, Tag, Button, Form, Input, DatePicker } from 'antd';
const { RangePicker } = DatePicker;

export default function FileManage() {
    const [form] = Form.useForm();
    return (
        <div className="App">
            文件管理
        </div>
    );
}

