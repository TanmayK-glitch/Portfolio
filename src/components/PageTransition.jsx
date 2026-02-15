import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <motion.div className="relative">
            <motion.div
                className="fixed inset-y-0 left-0 w-1/2 z-[9999] bg-black dark:bg-white pointer-events-none origin-left"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            />

            <motion.div
                className="fixed inset-y-0 right-0 w-1/2 z-[9999] bg-black dark:bg-white pointer-events-none origin-right"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            />

            {/* Page content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2,
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default PageTransition;
