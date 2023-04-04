<template>
	<div :class="['content',isCollapse?'menu--fold':'menu--unfold']">
		<!-- 侧边菜单栏 -->
		<div class="menuLeft">
			<div class="menu-nav-header">
				<img src="../../../assets/pic/logo.png" width="30rem" height="30rem"
					style="margin: 0.6rem 0 0 1rem;float:left"
				/>
				<div>{{isCollapse?' ':'西科周边好物'}}</div>
			</div>
             <!--todo 菜单栏组件 -->
            <el-menu active-text-color="#fff" background-color="#2d363a" class="el-menu-vertical-demo"
				:collapse-transition="false" default-active="1" text-color="#979899" @open="handleOpen"
				@close="handleClose" :collapse="isCollapse">
				<el-submenu index="1">
					<template #title>
						<i class="el-icon-user-solid"></i>
						<span>&nbsp;&nbsp;用户管理</span>
					</template>
					<el-menu-item index="1-1" @click="$router.push({name:'userManage'}, () => {})">
						<i class="el-icon-s-order"></i>
						<span slot="">&nbsp;&nbsp;用户列表</span>
					</el-menu-item>
					<el-menu-item index="1-2" @click="$router.push({name:'userManage'}, () => {})">
						<i class="el-icon-s-claim"></i>
						<span slot="">&nbsp;&nbsp;信息审核</span>
					</el-menu-item>
				</el-submenu>
                <el-submenu index="2"  @click="$router.push({name:'goodsManage'}, () => {})">
					<template #title>
						<i class="el-icon-s-goods"></i>
						<span slot="">&nbsp;&nbsp;好物管理</span>
					</template>
					<el-menu-item index="2-1" @click="$router.push({name:'goodsManage'}, () => {})">
						<i class="el-icon-s-order"></i>
						<span slot="">&nbsp;&nbsp;好物列表</span>
					</el-menu-item>
					
				</el-submenu>
                <el-submenu index="3"  @click="$router.push({name:'originalityManage'}, () => {})">
					<template #title>
						<i class="el-icon-s-opportunity"></i>
						<span slot="">&nbsp;&nbsp;创意管理</span>
					</template>
					<el-menu-item index="3-1" @click="$router.push({name:'originalityManage'}, () => {})">
						<i class="el-icon-s-order"></i>
						<span slot="">&nbsp;&nbsp;创意列表</span>
					</el-menu-item>
					
				</el-submenu>
                <el-submenu index="4"  @click="$router.push({name:'publishmentManage'}, () => {})">
					<template #title>
						<i class="el-icon-s-management"></i>
						<span slot="">&nbsp;&nbsp;出版管理</span>
					</template>
					<el-menu-item index="4-1" @click="$router.push({name:'publishmentManage'}, () => {})">
						<i class="el-icon-s-order"></i>
						<span slot="">&nbsp;&nbsp;出版列表</span>
					</el-menu-item>
				</el-submenu>
				<el-menu-item index="5" @click="$router.push({name:'publishmentManage'}, () => {})">
					<i class="el-icon-menu"></i>
					<span slot="">&nbsp;&nbsp;好物类别</span>
				</el-menu-item>
				<el-menu-item index="6" @click="$router.push({name:'goodsManage'}, () => {})">
					<i class="el-icon-s-promotion"></i>
					<span slot="">&nbsp;&nbsp;订单管理</span>
				</el-menu-item>
            </el-menu>
		</div>
		<!-- 右边内容 -->
		<div class="content-main">
			<div class="navTop horizontalView">
				<!-- 侧边栏操作按钮 -->
				<div class="nav_tools horizontalView">
                    <i v-show="isCollapse==false" class="el-icon-s-fold"  @click="isCollapse=!isCollapse"></i>
                    <i v-show="isCollapse==true" class="el-icon-s-unfold"  @click="isCollapse=!isCollapse"></i>
				</div>
				<!-- 用户 -->
				<el-dropdown id="adminMenu">
					<span class="el-dropdown-link" style="color: #BBDEFB;margin: -2rem 0 0  -2.5rem;font-size: 1.1rem;">
						<i class="el-icon-s-custom"></i>{{ userName }}
						<!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>
							<span @click="outLogin()">退出系统</span>
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<!-- todo 内容组件 -->
			<el-scrollbar  :height="siteContentViewHeight+32+'px'" >
				<el-card :style="'min-height:'+ siteContentViewHeight + 'px'">
					<router-view />
				</el-card>
			</el-scrollbar>
		</div>
	</div>
</template>
 
<script>
import './index.css'
export default {
    components: {

    },
    data: function() {
        return {
            isCollapse: false,
			mainTabs: [],
			mainTabsActiveName: '',
			menuActiveName: '',
			menus: [],
			userName: "",
        }
    },
	created() {
		let that = this;
		that.routeHandle(that.$route);
	},
	// 监听路由变化
	watch: {
		$route: {
			handler(to, from) {
				if (to.path != from.path) {
					// 处理路由
					this.routeHandle(to);
				}
			}
		}
	},
	methods:{
		handleOpen(){},
		handleClose(){},
		getLoginState() {
			let admin = localStorage.getItem("admin");
			// console.log("user", user);
			if (admin !== null) {
				this.userName = admin;
			}
		},
		outLogin() {
			// console.log("退出系统");
			localStorage.clear();
			this.$cookies.remove("adminToken");
			this.$router.replace('./adminLogin');
		},
		resetDocumentClientHeight: function() {
			this.documentClientHeight = document.documentElement['clientHeight'];
			window.onresize = () => {
				this.documentClientHeight = document.documentElement['clientHeight'];
				this.loadSiteContentViewHeight();
			};
		},
		loadSiteContentViewHeight: function() {
			let height = this.documentClientHeight - 52; //减去导航栏高度50 
			if (this.$route.meta.isTab) {
				height -= 70; //减去tab栏高度40,减去上下边距30
				this.siteContentViewHeight = height;
			} else {
				height -= 30;
				//给内容区设置高度
				this.siteContentViewHeight = height;
			}
		},
		routeHandle: function(route) {
			//每次切换页面，重新计算页面高度和内容区高度
			this.resetDocumentClientHeight();
			this.loadSiteContentViewHeight();
			if (route.meta.isTab) {
				// tab选中, 不存在先添加
				var tab = this.mainTabs.filter(item => item.name === route.name)[0];
				if (!tab) {
					if (route.meta.isDynamic) {
						route = this.dynamicMenuRoutes.filter(item => item.name === route.name)[0];
						if (!route) {
							return console.error('未能找到可用标签页!');
						}
					}
					tab = {
						menuId: route.meta.menuId || route.name,
						name: route.name,
						title: route.meta.title,
						iframeUrl: route.meta.iframeUrl || '',
						params: route.params,
						query: route.query
					};
					this.mainTabs = this.mainTabs.concat(tab);
				}
				this.menuActiveName = tab.menuId + '';
				this.mainTabsActiveName = tab.name;
			}
		},
		selectedTabHandle: function(tab, e) {
			tab = this.mainTabs.filter(item => item.name === tab.paneName);
			if (tab.length >= 1) {
				this.$router.push({
					name: tab[0].name,
					query: tab[0].query,
					params: tab[0].params
				});
			}
		},
		removeTabHandle: function(tabName) {
			this.mainTabs = this.mainTabs.filter(item => item.name !== tabName);
			if (this.mainTabs.length >= 1) {
				// 当前选中tab被删除
				if (tabName === this.mainTabsActiveName) {
					var tab = this.mainTabs[this.mainTabs.length - 1];
					this.$router.push({
							name: tab.name,
							query: tab.query,
							params: tab.params
						},
						() => {
							this.mainTabsActiveName = this.$route.name;
						}
					);
				}
			} else {
				this.menuActiveName = '';
				this.$router.push({
					name: 'Home'
				});
			}
		},	
	},
	mounted: function() {
		let that = this;
		this.getLoginState();
		that.resetDocumentClientHeight();
		that.loadSiteContentViewHeight();
	}
}
</script>
 
<style>
</style>
 