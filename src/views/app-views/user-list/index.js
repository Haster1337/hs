import React, { Component } from "react";
import { Card, Table, Tooltip, message, Button } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import UserView from "./UserView";
import AvatarStatus from "components/shared-components/AvatarStatus";
import userData from "assets/data/user-list.data.json";
import { showLoader, stopLoading } from "redux/actions/Loading";
import axios from "axios";
import { APP_PREFIX_PATH } from 'configs/AppConfig'

// export const UserList = ({ isLoading, showLoader, stopLoading }) => {
//   const [users, setUsers] = useState();
//   const [userProfileVisible, setUserProfileVisible] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const dispatch = useDispatch()

//   const deleteUser = (userId) => {
//     setUsers((prevState) => {
//       return prevState.filter((item) => item.id !== userId);
//     });
//     message.success({ content: `Deleted user ${userId}`, duration: 2 });
//   };

//   const getUsers = () => {
//     showLoader()
//     const userList = axios.get("https://jsonplaceholder.typicode.com/users").then(() => stopLoading())
//     setUsers(userList)
//   };

//   const showUserProfile = (userInfo) => {
//     setSelectedUser(userInfo);
//     setUserProfileVisible(true);
//   };

//   const closeUserProfile = () => {
//     setSelectedUser(null);
//     setUserProfileVisible(false);
//   };

//   useEffect(() => {
//     // getUsers()
//   }, [getUsers, stopLoading, showLoader, dispatch])

//   const tableColumns = [
//     {
//       title: "User",
//       dataIndex: "name",
//       render: (_, record) => (
//         <div className="d-flex">
//           <AvatarStatus
//             src={record.img}
//             name={record.name}
//             subTitle={record.email}
//           />
//         </div>
//       ),
//       sorter: {
//         compare: (a, b) => {
//           a = a.name.toLowerCase();
//           b = b.name.toLowerCase();
//           return a > b ? -1 : b > a ? 1 : 0;
//         },
//       },
//     },
//     {
//       title: "Role",
//       dataIndex: "role",
//       sorter: {
//         compare: (a, b) => a.role.length - b.role.length,
//       },
//     },
//     {
//       title: "Last online",
//       dataIndex: "lastOnline",
//       render: (date) => <span>{moment.unix(date).format("MM/DD/YYYY")} </span>,
//       sorter: (a, b) =>
//         moment(a.lastOnline).unix() - moment(b.lastOnline).unix(),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       render: (status) => (
//         <Tag
//           className="text-capitalize"
//           color={status === "active" ? "cyan" : "red"}
//         >
//           {status}
//         </Tag>
//       ),
//       sorter: {
//         compare: (a, b) => a.status.length - b.status.length,
//       },
//     },
//     {
//       title: "",
//       dataIndex: "actions",
//       render: (_, elm) => (
//         <div className="text-right">
//           <Tooltip title="View">
//             <Button
//               type="primary"
//               className="mr-2"
//               icon={<EyeOutlined />}
//               onClick={() => {
//                 showUserProfile(elm);
//               }}
//               size="small"
//             />
//           </Tooltip>
//           <Tooltip title="Delete">
//             <Button
//               danger
//               icon={<DeleteOutlined />}
//               onClick={() => {
//                 deleteUser(elm.id);
//               }}
//               size="small"
//             />
//           </Tooltip>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <Card bodyStyle={{ padding: "0px" }}>
//       <Table columns={tableColumns} dataSource={users} rowKey="id" />
//       <UserView
//         data={selectedUser}
//         visible={userProfileVisible}
//         close={() => {
//           closeUserProfile();
//         }}
//       />
//     </Card>
//   );
// };

export class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userData,
      userProfileVisible: false,
      selectedUser: null,
      showLoader: props.showLoader,
      stopLoading: props.stopLoading
    };
    this.routeChange = this.routeChange.bind(this)
  }

  routeChange = (product) => {
    let path = `${APP_PREFIX_PATH}/setting/${product.id}`
    
    this.props.history.push({
      pathname: path,
      state: {product}
    })
  }

  async componentDidMount() {
    this.state.showLoader()
    const userList = await axios.get("https://jsonplaceholder.typicode.com/users").then(this.state.stopLoading())
    this.setState({
      users: userList.data
    })
  }

  deleteUser = (userId) => {
    this.setState({
      users: this.state.users.filter((item) => item.id !== userId),
    });
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  showUserProfile = (userInfo) => {
    this.setState({
      userProfileVisible: true,
      selectedUser: userInfo,
    });
  };

  closeUserProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: null,
    });
  };

  render() {
    const { users, userProfileVisible, selectedUser } = this.state;
    
    const tableColumns = [
      {
        title: "User",
        dataIndex: "name",
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus
              src={record.img}
              name={record.name}
              subTitle={record.email}
            />
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Phone",
        dataIndex: "phone",
        render: phone => <span>{phone}</span>,
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Website",
        dataIndex: "website",
        render: website => <span>{website}</span>,
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        }
      },
      {
        title: "",
        dataIndex: "actions",
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="View">
              <Button
                type="primary"
                className="mr-2"
                icon={<EyeOutlined />}
                onClick={() => {
                  this.showUserProfile(elm);
                }}
                size="small"
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => {
                  this.deleteUser(elm.id);
                }}
                size="small"
              />
            </Tooltip>
          </div>
        ),
      },
    ];
    return (
      <Card bodyStyle={{ padding: "0px" }}>
        <Table columns={tableColumns} dataSource={users} rowKey="id" onRow={(row) => {
          return {
            onClick: (e) => this.routeChange(row)
          }
        }}/>
        <UserView
          data={selectedUser}
          visible={userProfileVisible}
          close={() => {
            this.closeUserProfile();
          }}
        />
      </Card>
    );
  }
}

const mapStateToProps = ({ loading }) => {
  const { isLoading } = loading;
  return { isLoading };
};

export default connect(mapStateToProps, { showLoader, stopLoading })(UserList);
