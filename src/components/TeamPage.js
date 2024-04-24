import React, { useEffect, useState } from "react";
import {
  getWebTeam,
  getRadTeam,
  getContentTeam,
  getFieldOfficer,
  getDesignTeam,
  getMarketingTeam,
} from "./services";

const TeamPage = () => {
  const [webTeamMembers, setWebTeamMembers] = useState([]);
  const [radTeamMembers, setRadTeamMembers] = useState([]);
  const [contentTeamMembers, setContentTeamMembers] = useState([]);
  const [fieldOfficerMembers, setFieldOfficerMembers] = useState([]);
  const [designTeamMembers, setDesignTeamMembers] = useState([]);
  const [marketingTeamMembers, setMarketingTeamMembers] = useState([]);

  const [filteredTeamMembers, setFilteredTeamMembers] = useState([]);
  const [filterType, setFilterType] = useState("web"); // Default filter: web
  const [loading, setLoading] = useState(true);
  const [showAlumni, setShowAlumni] = useState(false); // Default: hide alumni

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const webTeamData = await getWebTeam();
        const radTeamData = await getRadTeam();
        const contentTeamData = await getContentTeam();
        const fieldOfficerData = await getFieldOfficer();
        const designTeamData = await getDesignTeam();
        const marketingTeamData = await getMarketingTeam();

        setWebTeamMembers(webTeamData);
        setRadTeamMembers(radTeamData);
        setContentTeamMembers(contentTeamData);
        setFieldOfficerMembers(fieldOfficerData);
        setDesignTeamMembers(designTeamData);
        setMarketingTeamMembers(marketingTeamData);

        setFilteredTeamMembers(webTeamData); // Initially, display web team members
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team members:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to handle filter buttons
  const handleFilter = (type) => {
    setFilterType(type);
    setShowAlumni(false); // Reset to hide alumni
    switch (type) {
      case "web":
        setFilteredTeamMembers(webTeamMembers);
        break;
      case "rad":
        setFilteredTeamMembers(radTeamMembers);
        break;
      case "content":
        setFilteredTeamMembers(contentTeamMembers);
        break;
      case "field":
        setFilteredTeamMembers(fieldOfficerMembers);
        break;
      case "design":
        setFilteredTeamMembers(designTeamMembers);
        break;
      case "marketing":
        setFilteredTeamMembers(marketingTeamMembers);
        break;
      default:
        setFilteredTeamMembers([]);
        break;
    }
  };

  // Function to handle alumni filter
  const handleAlumniFilter = () => {
    setShowAlumni(true);
  };

  // Function to handle current members filter
  const handleCurrentFilter = () => {
    setShowAlumni(false);
  };

  return (
    <div className="pt-20">
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="loader">Loading ...</div>
        </div>
      ) : (
        <div>
          <div className="mt-7 mb-5">
            <div className="flex flex-wrap mx-8 mb-7 items-center justify-between">
              <h1 className="text-4xl bebas">Team</h1>
              <div className="btn-group">
                <button
                  onClick={() => handleFilter("web")}
                >
                  Web
                </button>
                <button
                  onClick={() => handleFilter("rad")}
                >
                  RAD
                </button>
                <button
                  onClick={() => handleFilter("content")}
                >
                  Content
                </button>
                <button
                  onClick={() => handleFilter("field")}
                >
                  Field
                </button>
                <button
                  onClick={() => handleFilter("design")}
                >
                  Design
                </button>
                <button
                  onClick={() => handleFilter("marketing")}
                >
                  Marketing
                </button>
              </div>
            </div>
            <div className="flex items-center mx-8 mb-4 justify-center">
              <div className="btn-group mb-5">
                <button
                  onClick={handleAlumniFilter}
                >
                  Alumni
                </button>
                <button
                  onClick={handleCurrentFilter}
                >
                  Current
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div>
                <div className="flex flex-wrap gap-3">
                  {showAlumni &&
                    filteredTeamMembers.map((team, index) =>
                      team.node.teamMembers.map(
                        (member, memberIndex) =>
                          member.alumni && (
                            <div key={memberIndex} className="card">
                              <img src={member.image.url} alt={member.name} />
                              <div className="bg-black">
                                <h2 className="text-2xl">{member.name}</h2>
                                <p className="text-xl">
                                  Batch: {member.batch} <br />
                                  {member.alumni ? "Alumni" : "Current"}
                                </p>
                                {member.linkedIn ? (
                                  <a
                                    href={member.linkedIn}
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
                          )
                      )
                    )}
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-3">
                  {!showAlumni &&
                    filteredTeamMembers.map((team, index) =>
                      team.node.teamMembers.map(
                        (member, memberIndex) =>
                          !member.alumni && (
                            <div key={memberIndex} className="card">
                              <img src={member.image.url} alt={member.name} />
                              <div className="bg-black">
                                <h2 className="text-2xl">{member.name}</h2>
                                <p className="text-xl">
                                  Batch: {member.batch} <br />
                                  {member.alumni ? "Alumni" : "Current"}
                                </p>
                                {member.linkedIn ? (
                                  <a
                                    href={member.linkedIn}
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
                          )
                      )
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;
