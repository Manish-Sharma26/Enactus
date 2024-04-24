import React, { useEffect, useState } from "react";
import { request, gql } from "graphql-request";
import { motion } from "framer-motion";

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
            featured
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
  console.log(teamMembers);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        // Filter team members based on the 'featured' attribute
        const featuredTeamMembers = data.filter(({ node }) => node.featured);
        setTeamMembers(featuredTeamMembers); // Display only featured team members
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchData();
  }, []);

  // Slice the team members to display only the first 4 when showAllMembers is false
  const displayedTeamMembers = showAllMembers
    ? teamMembers
    : teamMembers.slice(0, 3);

  return (
    <div
      className="w-screen flex-col mt-11 bg-gray-100 flex items-center justify-center flex-wrap"
      id="team"
    >
      <div className="flex items-center flex-col justify-center h-[150px] gap-4 ">
        <h1 className="text-3xl md:text-7xl bebas">Our Team</h1>
      </div>
      <div className="flex items-center justify-center gap-5 flex-wrap">
        {displayedTeamMembers.map(({ node, index }) => (
          <div className="card" key={index}>
            <img src={node.image.url} alt={node.name} />
            <div class="bg-black">
              <h2 className="text-2xl">{node.name}</h2>
              <p className="text-xl">
                Batch: {node.batch} <br />
                {node.alumni ? "Alumni" : "Current"}
              </p>
              {node.linkedIn ? (
                <a
                  href={node.linkedIn}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              ) : (
                <a
                  href="#"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-blue-800 p-10 text-2xl underline flex items-center justify-center cursor-pointer w-full">
        <a href="/team">
          {showAllMembers ? "Show less team members" : "View all team members"}
        </a>
      </h2>
    </div>
  );
};

export default Team;
