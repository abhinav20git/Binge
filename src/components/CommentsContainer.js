import React from 'react'

const commentsData = [
  {
    name: "Abhinav ",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Abhinav ",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Abhinav ",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name:"Abhinav ",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Abhinav ",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Abhinav ",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Abhinav ",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Abhinav ",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name:"Abhinav ",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Abhinav ",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Abhinav ",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Abhinav ",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Abhinav ",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];
  

const Comment=({data})=>{
  const {name,text,replies}=data;
  return (
    <div className='mt-2 flex shadow-lg  rounded-lg'>
        <img 
          src='https://tse2.mm.bing.net/th?id=OIP.YpQ0oZGLK4k09k6sq354OwHaHx&pid=Api&P=0&h=180'
          className='ml-2 mt-2 w-8 h-8 mix-blend-darken'
          alt='comment-icon'/>
        <div className='m-2 px-3'>
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>

    </div>
  )
}

const CommentsList=({comments})=>
{
  return comments.map((comment,index)=>(
    
        <div>
            <Comment key={index} data={comment}/>
            <div className='ml-5 rounded-lg '>
              <CommentsList comments={comment.replies} />
            </div>
        </div>
        )
  );
          
};


const CommentsContainer = () => {
    
 return (
    <div className='p-2 m-5'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;