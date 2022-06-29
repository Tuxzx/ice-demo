import { Layout, Menu } from 'antd'
import { IRouterConfig, useHistory } from 'ice';
import routes from '@/routes';

const {
  Content,
  Sider,
} = Layout

const loopRouteItem2Menu = (routeConfig: IRouterConfig[], basePath: string = '') =>
  routeConfig.map((item) => ({
    label: item.pageConfig?.title ?? '-',
    key: `${basePath}${item?.path ?? ''}`,
    children: item.children ? loopRouteItem2Menu(item.children, `${basePath}${item?.path ?? ''}`) : '',
  }));

export default function (props) {
  const history = useHistory();
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider>
        <Menu
          items={loopRouteItem2Menu(routes)}
          onClick={({ key }) => {
            history.push(key)
          }}
        />
      </Sider>
      <Content>
        {props.children}
      </Content>
    </Layout>
  )
}

