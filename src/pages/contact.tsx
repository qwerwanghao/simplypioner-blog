import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <Layout title="联系我 | 个人博客" description="联系我，分享您的想法或合作意向">
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">联系我</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              如果您有任何问题、合作意向或者只是想打个招呼，请随时联系我。我会尽快回复您的消息。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card p-6 h-full">
                <h2 className="text-2xl font-bold mb-6">联系信息</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-accent text-xl mt-1 mr-4">
                      <FiMail />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">邮箱</h3>
                      <p className="text-gray-400">example@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-accent text-xl mt-1 mr-4">
                      <FiMapPin />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">位置</h3>
                      <p className="text-gray-400">中国，北京</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-medium mb-4">社交媒体</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white text-xl"
                      aria-label="GitHub"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white text-xl"
                      aria-label="Twitter"
                    >
                      <FiTwitter />
                    </a>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white text-xl"
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage; 