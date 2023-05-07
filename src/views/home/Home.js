// import logo from '../../assets/images/logo.svg';
// import {Counter} from '../../features/counter/Counter';
import { Space, Table, Tag, Button, Form, Input, DatePicker } from 'antd';
import './home.css';

const { RangePicker } = DatePicker;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default function Home() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
      console.log(values);
    };

    const onReset = () => {
      form.resetFields();
    };
    return (
        <div className="App">
            <header className="App-header">
              筛选项
                <Form
                  form={form}
                  layout="vertical"
                >
                  <Form.Item name="code" label="编码">
                    <Input />
                  </Form.Item>
                  <Form.Item name="time" label="时间范围" >
                    <RangePicker />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary">Submit</Button>
                    <Button htmlType="button" onClick={onReset}>
                      重置
                    </Button>
                  </Form.Item>
                </Form>
            </header>
            <Table columns={columns} dataSource={data} />
        </div>
    );
}

