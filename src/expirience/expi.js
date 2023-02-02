import React from 'react';
import {Expidet} from "./expidet";

const Expi = () => {
    return (
        <div className="expi">
            <div className="expe">Experience</div>
            <Expidet year={1998} comp='EnTechEco, Ltd.'
                     desc='Started working in the company as a Delphi developer using Oracle DBMS.
                     Lots of completed projects. A lot of implementations in Ukraine. Worked on the positions:
                     Developer, Team Lead, Implementation Manager.'/>
            <Expidet year={2006} comp='KM Ware, Ltd.'
                     desc='Two OEBS projects were launched in Rosno (Moscow) and BTA Bank (Alma-Aty).
                      Worked as Project Manager of the project.Started programming on Oracle Apex'/>
            <Expidet year={2011} comp='KM Techno Kharkiv, Ltd.'
                     desc='Worked as Branch Manager. Directions Outsourcing. Development on mobile devices.
                     Project development. implementation.'/>
            <Expidet year={2014} comp='Allhim, Ltd.'
                     desc='Creation of an enterprise management system. These are purchases, sales,
                     finance, warehouses, shipments and financial accounting.System developed on Oracle Apex 5'/>
            <Expidet year={2019} comp='Entrepreneur Khotinenko Y. '
                     desc='Creation and launch of a sports club management system. Development and launch of a
                     rare books management system in Kazakhstan. Development of many small projects.All systems
                     are built on Oracle Apex'/>


        </div>
    );
};

export
{Expi};