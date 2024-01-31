import React, { useEffect } from "react";
import Layout from "../../Layout";

const Ntse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="NTSE-Syllabus-IIT-Academy">
      <div
        className="jee-main-syllabus"
        style={{ marginLeft: "5%", marginRight: "5%", textAlign: "justify" }}
      >
        <h2>Syllabus for NTSE</h2>
        <p>
          <strong>MATHEMATICS:</strong> <br />
          Algebraic Expressions, Arithmetic Arithmetic, Progressions Basic
          Geometry Circles & Triangles Coordinate Geometry Direct & Inverse
          Variations Exponent Linear Equation Mensuration Number System
          Percentage & Its Application Playing with Number Probability Quadratic
          Equations Rational Numbers Simple & Compound Interest Square & Cube
          Roots Statistics Surface Areas and Volume Trigonometry
        </p>
        <p>
          <strong>PHYSICS:</strong> <br />
          Light and Sound, Magnetism and Electricity, Measurements, Motion and
          Force, Source of Energy, The Universe, Work and Energy
        </p>
        <p>
          <strong>CHEMISTRY:</strong> <br />
          Matrices, algebra of matrices, type of matrices, determinants, and
          matrices of order two and three, evaluation of determinants, area of
          triangles using determinants, Adjoint, and evaluation of inverse of a
          square matrix using determinants and, Test of consistency and solution
          of simultaneous linear equations in two or three variables using
          matrices.
        </p>
        <p>
          <strong>BIOLOGY:</strong> <br />
          The fundamental principle of counting, permutation as an arrangement
          and combination as section, Meaning of P (n,r) and C (n,r), simple
          applications.
        </p>
        <p>
          <strong>UNIT 5: BINOMIAL THEOREM AND ITS SIMPLE APPLICATIONS:</strong>{" "}
          <br /> Binomial theorem for a positive integral index, general term
          and middle term, and simple applications.
        </p>
        <p>
          <strong>UNIT 6: SEQUENCE AND SERIES:</strong> <br />
          Arithmetic and Geometric progressions, insertion of arithmetic,
          geometric means between two given numbers, Relation between A.M and
          G.M.
        </p>
        <p>
          <strong>UNIT 7: LIMIT, CONTINUITY, AND DIFFERENTIABILITY:</strong>{" "}
          <br /> Real–valued functions, algebra of functions, polynomials,
          rational, trigonometric, logarithmic, and exponential functions,
          inverse function. Graphs of simple functions. Limits, continuity, and
          differentiability. Differentiation of the sum, difference, product,
          and quotient of two functions. Differentiation of trigonometric,
          inverse trigonometric, logarithmic, exponential, composite, and
          implicit functions; derivatives of order up to two, Applications of
          derivatives: Rate of change of quantities, monotonic-Increasing and
          decreasing functions, Maxima and minima of functions of one variable.
        </p>
        <p>
          <strong>UNIT 8: INTEGRAL CALCULAS:</strong>
          <br /> Integral as an anti-derivative, Fundamental integral involving
          algebraic, trigonometric, exponential, and logarithmic functions.
          Integrations by substitution, by parts, and by partial functions.
          Integration using trigonometric identities. Evaluation of simple
          integrals, The fundamental theorem of calculus, properties of definite
          integrals. Evaluation of definite integrals, determining areas of the
          regions bounded by simple curves in standard form.
        </p>
        <p>
          <strong>UNIT 9: DIFFRENTIAL EQUATIONS</strong> <br />
          Ordinary differential equations, their order, and degree, the solution
          of differential equation by the method of separation of variables,
          solution of a homogeneous and linear differential equation of the type
          𝑑𝑦/𝑑𝑥 + 𝑝(𝑥)𝑦 = 𝑞(𝑥)
        </p>
        <p>
          <strong>UNIT 10: CO-ORDINATE GEOMETRY:</strong> <br />
          Cartesian system of rectangular coordinates in a plane, distance
          formula, sections formula, locus, and its equation, the slope of a
          line, parallel and perpendicular lines, intercepts of a line on the
          co-ordinate axis. Straight line Various forms of equations of a line,
          intersection of lines, angles between two lines, conditions for
          concurrence of three lines, the distance of a point form a line,
          co-ordinate of the centroid, orthocentre, and circumcentre of a
          triangle, Circle, conic sections A standard form of equations of a
          circle, the general form of the equation of a circle, its radius and
          central, equation of a circle when the endpoints of a diameter are
          given, points of intersection of a line and a circle with the centre
          at the origin and sections of conics, equations of conic sections
          (parabola, ellipse, and hyperbola) in standard forms,
        </p>
      </div>
    </Layout>
  );
};

export default Ntse;
