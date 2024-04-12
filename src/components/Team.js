import React, { useEffect, useState } from "react";
import { request, gql } from "graphql-request";

export const getPosts = async () => {
  const query = gql`
    query Assets {
      teamMembersConnection {
        edges {
          node {
            alumni
            batch
            linkedIn
            name
            image {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(process.env.REACT_APP_API_KEY, query);

  return result.teamMembersConnection.edges;
};

const Team = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [showAllMembers, setShowAllMembers] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getPosts();
          setTeamMembers(data); // Display all team members initially
        } catch (error) {
          console.error("Error fetching team members:", error);
        }
      };
  
      fetchData();
    }, []);
  
    // Slice the team members to display only the first 4 when showAllMembers is false
    const displayedTeamMembers = showAllMembers ? teamMembers : teamMembers.slice(0, 3);

    return (
      <div className="w-screen bg-gray-100 flex items-center justify-center flex-wrap" id="team">
        <div className="flex items-center flex-col justify-center h-[150px] gap-4 ">
          <h1 className="text-7xl underline">Our Team</h1>
          <h4 className="text-xl text-gray-600">
            Even though we are a small team, we still have goals!
          </h4>
        </div>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {displayedTeamMembers.map(({ node }) => (
            <div key={node.name} className="bg-white h-[600px] w-[400px] rounded-lg shadow-md">
              <img
                src={node.image.url}
                alt={node.name}
                className="w-full h-[400px] object-cover rounded-t-lg bg-black "
              />
              <div className="p-4 gap-3 flex items-center justify-center flex-col">
                <h3 className="text-3xl font-semibold">{node.name}</h3>
                <p className="text-xl">Batch: {node.batch}</p>
                <p className="text-xl">{node.alumni ? "Alumni" : "Current"}</p>
                {node.linkedIn ? (
                  <a
                    href={node.linkedIn}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                ) : <p className="text-gray-500" title="LinkedIn not given">LinkedIn</p>}
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-blue-800 p-10 text-2xl underline flex items-center justify-center cursor-pointer w-full" onClick={() => setShowAllMembers(!showAllMembers)}>
          {showAllMembers ? 'Show less team members' : 'View all team members'}
        </h2>
      </div>
    );
  };
  
  export default Team;
