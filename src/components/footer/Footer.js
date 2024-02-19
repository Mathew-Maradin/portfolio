import React from 'react'; 

const Footer = () => {
  return (
    <footer class="bg-gray-800 text-white py-4 text-center">
        <div class="flex justify-center space-x-4">
            <a href="https://github.com/Mathew-Maradin" class="hover:text-gray-300">GitHub</a>
            <a href="https://www.linkedin.com/in/mathewmaradin/" class="hover:text-gray-300">LinkedIn</a>
            <a href="mailto:mmaradin@uwaterloo.ca" class="hover:text-gray-300">mmaradin@uwaterloo.ca</a>
        </div>
    </footer>
  );
};

export default Footer;