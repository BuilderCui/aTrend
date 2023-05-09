import { Space, Table, Tag, Button, Form, Input, DatePicker } from 'antd';
const { RangePicker } = DatePicker;

export default function TodayData() {
    const [form] = Form.useForm();
    return (
        <div className="App">
            今日涨幅
        </div>
    );
}

