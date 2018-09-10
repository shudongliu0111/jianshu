import {fromJS} from 'immutable';

const defaultState = fromJS({
	topicList:[
		{
			id:1,
			title:'社会热点',
			imgURL:'//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
		},
		{
			id:2,
			title:'手绘',
			imgURL:'//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
		}
	],
	articleList:[
		{
				id:1,
				title:"程序员伤不起的30岁",
				desc:"程序员干到30岁，好不容易从码奴混到了白领，却再也干不动了，还时时面临失业的危险。30岁，是一个程序员伤不起的年龄。明天，何去何从？ 1.30岁...",
				imgURL:"//upload-images.jianshu.io/upload_images/5275417-3bd27bbb1b375482.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
		},
		{
				id:2,
				title:"程序员伤不起的30岁",
				desc:"程序员干到30岁，好不容易从码奴混到了白领，却再也干不动了，还时时面临失业的危险。30岁，是一个程序员伤不起的年龄。明天，何去何从？ 1.30岁...",
				imgURL:"//upload-images.jianshu.io/upload_images/5275417-3bd27bbb1b375482.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
		}
	],
	recommendList:[
		{
			id:1,
			color:"#febb50",
			title:"七月热门 >"
		},
		{
			id:2,
			color:"#f69581",
			title:"八月热门 >"
		},
		{
			id:3,
			color:"#f69581",
			title:"八月热门 >"
		},
		{
			id:4,
			color:"#f69581",
			title:"八月热门 >"
		}
	]
})
export default (state=defaultState,action)=>{
	switch(action.type){
		default:
		return state
	}
}