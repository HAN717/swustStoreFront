<template>
	<div :class="['content',isCollapse?'menu--fold':'menu--unfold']">
		<!-- 侧边菜单栏 -->
		<div class="menuLeft">
			<div class="menu-nav-header">
				<span>{{isCollapse?'控制台':'管理控制台'}}</span>
			</div>
             <!--todo 菜单栏组件 -->
            <el-menu active-text-color="#fff" background-color="#263238" class="el-menu-vertical-demo"
				:collapse-transition="false" default-active="2" text-color="#96a4ab " @open="handleOpen"
				@close="handleClose" :collapse="isCollapse">
                <el-menu-item index="1">
					<i class="el-icon-s-home"></i>
					<span slot="">&nbsp;&nbsp;首页</span>
				</el-menu-item>
                <el-menu-item index="2" @click="$router.push({name:'userManage'})">
                    <i class="el-icon-user-solid"></i>
					<span slot="">&nbsp;&nbsp;用户管理</span>
				</el-menu-item>
                <el-menu-item index="3"  @click="$router.push({name:'goodsManage'})">
					<i class="el-icon-s-goods"></i>
					<span slot="">&nbsp;&nbsp;好物管理</span>
				</el-menu-item>
                <el-menu-item index="4"  @click="$router.push({name:'originalityManage'})">
					<i class="el-icon-s-opportunity"></i>
					<span slot="">&nbsp;&nbsp;创意管理</span>
				</el-menu-item>
                <el-menu-item index="5"  @click="$router.push({name:'publishmentManage'})">
					<i class="el-icon-s-management"></i>
					<span slot="">&nbsp;&nbsp;出版管理</span>
				</el-menu-item>
            </el-menu>
		</div>
		<!-- 右边内容 -->
		<div class="content-main">
			<div class="navTop horizontalView">
				<div class="nav_tools horizontalView">
                    <i v-show="isCollapse==false" class="el-icon-s-fold"  @click="isCollapse=!isCollapse"></i>
                    <i v-show="isCollapse==true" class="el-icon-s-unfold"  @click="isCollapse=!isCollapse"></i>
				</div>
			</div>
			<!-- todo 内容组件 -->
			<!-- <router-view /> -->
			<el-tabs v-if="$route.meta.isTab" v-model="mainTabsActiveName" :closable="true"
				@tab-click="selectedTabHandle" @tab-remove="removeTabHandle">
				<el-scrollbar ref="scroll" :height="siteContentViewHeight+32+'px'" @scroll="scroll">
					<el-tab-pane v-for="item in mainTabs" :label="item.title" :name="item.name">
						<el-card :style="'min-height:'+siteContentViewHeight + 'px'">
							<router-view v-if="item.name === mainTabsActiveName" />
						</el-card>
					</el-tab-pane>
				</el-scrollbar>
			</el-tabs>
			<div v-else>
				<el-scrollbar ref="scroll" :height="siteContentViewHeight+32+'px'" @scroll="scroll">
					<!-- 主入口标签页 e -->
					<el-card :style="'min-height:'+ siteContentViewHeight + 'px'">
						<router-view />
					</el-card>
				</el-scrollbar>
			</div>
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
			menus: []
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
		resetDocumentClientHeight: function() {
			this.documentClientHeight = document.documentElement['clientHeight'];
			window.onresize = () => {
				this.documentClientHeight = document.documentElement['clientHeight'];
				this.loadSiteContentViewHeight();
			};
		},
		loadSiteContentViewHeight: function() {
			let height = this.documentClientHeight - 52; //减去导航栏高度50 
			console.log(this.$route.meta.isTab)
			if (this.$route.meta.isTab) {
				height -= 70; //减去tab栏高度40,减去上下边距30
				/* this.siteContentViewHeight = {
					'min-height': height + 'px'
				}; */
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
		that.resetDocumentClientHeight();
		that.loadSiteContentViewHeight();
	}
}
</script>
 
<style>
</style>
 