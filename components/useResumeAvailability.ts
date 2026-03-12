import { useEffect, useState } from "react";

export const resumePath = "/Siddharth.pdf";

const useResumeAvailability = () => {
  const [isResumeAvailable, setIsResumeAvailable] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const checkResume = async () => {
      try {
        const response = await fetch(resumePath, {
          cache: "no-store",
          method: "HEAD",
        });

        if (isMounted) {
          setIsResumeAvailable(response.ok);
        }
      } catch {
        if (isMounted) {
          setIsResumeAvailable(false);
        }
      } finally {
        if (isMounted) {
          setIsChecking(false);
        }
      }
    };

    checkResume();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    isChecking,
    isResumeAvailable,
    resumePath,
  };
};

export default useResumeAvailability;