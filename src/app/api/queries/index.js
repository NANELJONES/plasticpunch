import { graphql } from "graphql"
import {request, gql } from  "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT_CMS

// getProjects
export const getProjects = async ()=>{
    
    const query =  gql `

  query MyQuery {
  projectsConnection {
    edges {
      node {
        clientName
        projectDetails
        projectExcerpt
        projectField
        projectLocation
        projectName
        projectStatus
        slug
        startDate
        projectImages {
          url
        }
      }
    }
  }
}   
    `

try{
    const response = await request(graphqlAPI, query)

    
    return   response?.projectsConnection?.edges
   
    
}catch (error){
    console.log("There was an error", error)
    return ["null"]
}



}



// getSingleProjects
export const getSingleProject = async (slug) => {
  const query = gql`
    query GetProjectBySlug($slug: String!) {
      projectsConnection(where: { slug: $slug }) {
        edges {
          node {
            clientName
            projectDetails
            projectExcerpt
            projectField
            projectLocation
            projectName
            projectStatus
            slug
             service {
          serviceName
        }
            startDate
            endDate
            projectImages {
              url
            }
          }
        }
      }
    }
  `;

  try {
    const response = await request(graphqlAPI, query, { slug });
    return response?.projectsConnection?.edges[0]?.node;
  } catch (error) {
    console.error('There was an error fetching the project:', error);
    return null;
  }
};


// getGallery
// getGallery
export const getGallery = async (first = 2, after = null) => {
  const query = gql`
    query MyQuery($first: Int, $after: String) {
      galleriesConnection(first: $first, after: $after) {
        edges {
          node {
            title
            imageContent {
              url
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `;

  try {
    const response = await request(graphqlAPI, query, { first, after });
    console.log("Fetched images:", response);
    return response.galleriesConnection;
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return { edges: [], pageInfo: { hasNextPage: false } };
  }
};

export const getTips = async (first = 10, after = null) => {
  const query = gql`
    query MyQuery($first: Int, $after: String) {
      tipsConnection(first: $first, after: $after) {
        edges {
          node {
            tip
          }
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `;

  try {
    const response = await request(graphqlAPI, query, { first, after });
    
    return {
      data: response.tipsConnection.edges,
      pageInfo: response.tipsConnection.pageInfo,
    };
  } catch (error) {
    console.error("There was an error fetching tips:", error);
    return { edges: [], pageInfo: { hasNextPage: false, endCursor: null } };
  }


};




export const getEvents = async (first = 1, after = null)=>{
  const query = gql`
  query MyQuery($first: Int, $after: String) {
    eventsConnection(first: $first, after: $after) {
      edges {
        node {
          eventDetails {
            html
            raw
          }
          eventIntro
          eventGallery {
            url
          }
          eventName
          eventLocation
          eventType
          externalEventLink
          ticketPrice
          slug
          eventDatesAndTime
          eventCoverImage {
            url
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;


  try {
    const response = await request(graphqlAPI, query, { first, after });
    // console.log("these are the events",response)
    return {
      data: response.eventsConnection.edges,
      pageInfo: response.eventsConnection.pageInfo,
    };
  } catch (error) {
    console.error("There was an error fetching tips:", error);
    return { edges: [], pageInfo: { hasNextPage: false, endCursor: null } };
  }



}


export const getSingleEvent = async (slug)=>{
  const query = gql`
  query MyQuery($slug: String!) {
    eventsConnection(where: { slug: $slug }) {
      edges {
        node {
          eventDetails {
            html
            raw
          }
          eventIntro
          eventGallery {
            url
          }
          eventName
          eventLocation
          eventType
          externalEventLink
          ticketPrice
          slug
          eventDatesAndTime
          eventCoverImage {
            url
          }
        }
        cursor
      }
    
    }
  }
`;


  try {
    const response = await request(graphqlAPI, query, { slug });
    console.log("these is the events ",response?.eventsConnection?.edges[0]?.node)
    return   response?.eventsConnection?.edges[0]?.node
     
 
  } catch (error) {
    console.error("There was an error fetching tips:", error);
    return null;
  }



}






// get Team
export const getTeam = async ()=>{
    
  const query =  gql `

query MyQuery {
  teamsConnection {
    edges {
      node {
        employeeName
        employeePosition
        employeeImage {
          url
        }
      }
    }
  }
}
  `

try{
  const response = await request(graphqlAPI, query)

  
  return   response?.teamsConnection?.edges
 
  
}catch (error){
  console.log("There was an error", error)
  return ["null"]
}



}


// get Testimonials
export const getTestimonials  = async ()=>{
    
  const query =  gql `

query MyQuery {
  testimonialsConnection {
    edges {
      node {
        personName
        personPosition
        testimony
        personImage {
          url
        }
      }
    }
  }
}
  `

try{
  const response = await request(graphqlAPI, query)

  
  return   response?.testimonialsConnection?.edges
 
  
}catch (error){
  console.log("There was an error", error)
  return ["null"]
}



}




// get AwarenessMaterials
export const getAwarenessMaterials = async (first = 10, after = null) => {
  const query = gql`
    query MyQuery($first: Int, $after: String) {
      awarenessMaterialsConnection(first: $first, after: $after) {
        edges {
          node {
            title
            awarenessContent {
              url
              fileName
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `;

  try {
    const response = await request(graphqlAPI, query, { first, after });
    console.log("This is the data fetched for awareness materials:", response);

    return {
      data: response.awarenessMaterialsConnection.edges,
      pageInfo: response.awarenessMaterialsConnection.pageInfo,
    };
  } catch (error) {
    console.error("Error fetching awareness materials:", error);
    return { edges: [], pageInfo: { hasNextPage: false, endCursor: null } };
  }
};





export const getClients = async ()=>{
  const query = gql `
query MyQuery {
  clientsConnection {
    edges {
      node {
        partnerName
        partnerLogo {
          url
        }
      }
    }
  }
}
  `
  try{
    const response = await request(graphqlAPI, query)
  
    console.log( "these are the clients", response?.clientsConnection?.edges)
    return   response?.clientsConnection?.edges
   
    
  }catch (error){
    console.log("There was an error, WE NOR SEE TOP", error)
    return ["null"]
  }
  

}



// get volunteer option
export const getVolunteeringOptions = async () => {

  const query = gql`
query GetEnumValues {
  __type(name: "VolunteeringOptions") {
    enumValues {
      name
    }
  }
}
  
  `


  try {
    const response = await request(graphqlAPI, query);

  
     return response?.__type.enumValues
  } catch (error) { 
    console.error("There was an error fetching the volunteer options:", error);
    return [];
  }

}


export const submitVolunteerApplication = async (volunteer_Info) => {
  const response = await fetch("/api/queries/volunteers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(volunteer_Info),
  });

  if (!response.ok) {
    throw new Error("Failed to submit Volunteer Position");
  }

  return response.json();


}


export const getAvailablePositions = async()=>{

const query = gql`
query MyQuery {
  jobPostsConnection {
    edges {
      node {
        slug
        jobDetails
        jobExcerpt
        jobName
        id
        jobStatus
      }
    }
  }
}


`


try{

const response = await request(graphqlAPI, query)
console.log("these are the postions available" , response)
return response.jobPostsConnection.edges

}catch(error){
  console.log("There was an error", error)
  return [null]

}


}


export const getSingleJobPost = async(slug)=>{
  const query = gql`
query MyQuery ($slug: String!){
  jobPostsConnection(where:{slug:$slug}) {
    edges {
      node {
        slug
        jobDetails
        jobExcerpt
        jobName
        id
        jobStatus
      }
    }
  }
}


`


try{

const response = await request(graphqlAPI, query, {slug})
console.log("this is the single job position" , response)
return response?.jobPostsConnection?.edges[0]?.node

}catch(error){
  console.log("There was an error", error)
  return [null]

}

}

export const submitJobApplication =  async (applicant_data)=>{

  const response = await fetch("/api/queries/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(applicant_data),
  });

  if (!response.ok) {
    throw new Error("Failed to submit Job Application");
  }

  return response.json();


}



