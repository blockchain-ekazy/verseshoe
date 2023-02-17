import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { popupModalHide } from '../redux/counterSlice';
import { TypeAnimation } from 'react-type-animation';

const PopupModal = () => {
	const [isWritten, setWritten] = useState(false);
	const [seconds, setSeconds] = useState(38);

	const { popupModal } = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	useEffect(() => {
		if(isWritten) {
			const timer = setInterval(() => {
				if(seconds > 0) {
					setSeconds(seconds-1);
				}				
			  }, 1000);
			  return () => clearInterval(timer);
		}
	  }, [isWritten, seconds]);

	return (
		<div>
			{/* <!-- Reward Modal --> */}
			<div className={popupModal ? 'block modal fade show ' : 'modal fade hidden'}>
				<div className="modal-dialog w-10/12">
					<div className="modal-content popup text-lg">

						{/* <!-- Body --> */}
						<div className="modal-body p-6 pt-14">
							{
								isWritten && (
									<div className='pb-10 text-center text-red font-display text-5xl fade-in-button'>
										Hurry up! Mint close in {seconds} seconds!
									</div>
								)
							}
							<div className="text-center text-white pl-10 pr-10 pb-10">
								<TypeAnimation
									sequence={[
										"We allow our community to win 50k $ and Airdrops worth 3- 4 ETH from the Verseshoe brand simply by selling VS Characters over 2 ETH. Remember that you will still have chance to receive an Airdrop if you listed the VS Character above 2 ETH or more but couldn't sell it. If you do not list it over 2 ETH, you will miss many significant opportunities from the Verseshoe brand.", 
										() => {
											setWritten(true);
										}
									]}
									wrapper="p"
									cursor={false}
									speed={35}
								/>
							</div>

							<div className="w-full mt-6 mb-4">
								{
									isWritten && (
										<div className="flex flex-row justify-center w-full fade-in-button">
											<div className="vs-button-border">

											</div>
											<div className="vs-button flex cursor-pointer" onClick={() => dispatch(popupModalHide())}>
												<span className="font-display text-white w-full self-center text-center text-xl">
													Close
												</span>
											</div>
										</div>
									)
								}
							</div>
							
						</div>
						
						{/* <!-- end body --> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopupModal;
